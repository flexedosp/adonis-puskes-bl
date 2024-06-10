import type { HttpContext } from '@adonisjs/core/http'

const defaultUrl = 'pages/guest/'

export default class GuestsController {
  async index(ctx: HttpContext) {
    return ctx.view.render(defaultUrl + 'home')
  }

  async profil(ctx: HttpContext) {
    return ctx.view.render(defaultUrl + 'profil')
  }
  async blogs(ctx: HttpContext) {
    return ctx.view.render(defaultUrl + 'blogs')
  }

  async contact(ctx: HttpContext) {
    return ctx.view.render(defaultUrl + 'contact')
  }

  async whoisdev(ctx: HttpContext) {
    return ctx.view.render(defaultUrl + 'whoisdev')
  }
}
