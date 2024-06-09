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
router.get('/profil', [GuestsController, 'profil']).as('puskes.profil')
router.get('/blogs', [GuestsController, 'blogs']).as('puskes.blog')
router.get('/contact', [GuestsController, 'contact']).as('puskes.contact')

// router.on('/').render('pages/home')
