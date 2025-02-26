import BlogPost from '#blog/database/models/blog_post'
import { HttpContext } from '@adonisjs/core/http'
import { Get } from '@softwarecitadel/girouette'

export default class MarketingController {
  @Get('/', 'marketing.landing')
  showLandingPage({ inertia }: HttpContext) {
    return inertia.render('marketing/landing')
  }

  @Get('/pricing', 'marketing.pricing')
  showPricingPage({ inertia }: HttpContext) {
    return inertia.render('marketing/pricing')
  }

  @Get('/blog', 'marketing.blog')
  async showBlogPage({ inertia }: HttpContext) {
    const posts = await BlogPost.query().preload('author').orderBy('publishedAt', 'desc')
    return inertia.render('marketing/blog', { posts })
  }

  @Get('/blog/:postId', 'marketing.post')
  async showPostPage({ params, inertia }: HttpContext) {
    const post = await BlogPost.query().where('id', params.postId).preload('author').firstOrFail()
    return inertia.render('marketing/post', { post })
  }
}
