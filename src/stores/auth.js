import { reactive } from 'vue'
import { supabase } from '../api/supabase'

// Promise che si risolve quando lo stato auth iniziale è noto.
// Il router la aspetta prima di valutare i guard.
let resolveReady
export const authReady = new Promise(resolve => { resolveReady = resolve })

export const authStore = reactive({
  user:    null,
  profile: null,
  loading: true,

  get isLoggedIn() { return !!this.user },
  get isAdmin()    { return this.profile?.role === 'admin' },

  async init() {
    // Legge la sessione corrente (anche dopo click magic link)
    const { data: { session } } = await supabase.auth.getSession()
    this.user = session?.user ?? null
    if (this.user) await this._loadProfile()
    this.loading = false
    resolveReady()

    // Ascolta i cambi di sessione per tutta la vita dell'app
    supabase.auth.onAuthStateChange(async (_event, session) => {
      this.user = session?.user ?? null
      if (this.user) {
        await this._loadProfile()
      } else {
        this.profile = null
      }
    })
  },

  async _loadProfile() {
    const { data, error } = await supabase
      .from('profiles')
      .select('id, email, role, created_at')
      .eq('id', this.user.id)
      .single()
    if (!error) this.profile = data
  },

  async signOut() {
    await supabase.auth.signOut()
    this.user    = null
    this.profile = null
  }
})
