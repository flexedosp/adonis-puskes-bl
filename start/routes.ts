/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const GuestsController = () => import('#controllers/guests_controller')
import router from '@adonisjs/core/services/router'

router.get('/', [GuestsController, 'index']).as('puskes.home')
router.get('/tentangKami', [GuestsController, 'tentangKami']).as('puskes.tentangkami')
router.get('/berita', [GuestsController, 'berita']).as('puskes.berita')
router.get('/layanan', [GuestsController, 'layanan']).as('puskes.layanan')
router.get('/modul', [GuestsController, 'modul']).as('puskes.modul')
router.get('/contact', [GuestsController, 'contact']).as('puskes.contact')
router.get('/thedev', [GuestsController, 'thedev'])

// router.on('/').render('pages/home')
