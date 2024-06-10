import type { HttpContext } from '@adonisjs/core/http'

const defaultUrl = 'pages/guest/'

export default class GuestsController {
  async index(ctx: HttpContext) {
    return ctx.view.render(defaultUrl + 'home')
  }

  async tentangKami(ctx: HttpContext) {
    return ctx.view.render(defaultUrl + 'tentangKami')
  }

  async berita(ctx: HttpContext) {
    return ctx.view.render(defaultUrl + 'berita')
  }

  async layanan(ctx: HttpContext) {
    return ctx.view.render(defaultUrl + 'layanan')
  }

  async modul(ctx: HttpContext) {
    return ctx.view.render(defaultUrl + 'modul')
  }

  async contact(ctx: HttpContext) {
    return ctx.view.render(defaultUrl + 'contact')
  }

  async thedev(ctx: HttpContext) {
    return ctx.view.render(defaultUrl + 'thedev')
  }
}
