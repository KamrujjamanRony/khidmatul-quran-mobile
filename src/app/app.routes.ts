import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SalatTimesComponent } from './pages/salat-times/salat-times.component';
import { HijriDateComponent } from './pages/hijri-date/hijri-date.component';
import { ForayezComponent } from './pages/forayez/forayez.component';
import { ZakatComponent } from './pages/zakat-page/zakat/zakat.component';
import { Blog1Component } from './components/blogs/blog1/blog1.component';
import { SelectedWritingComponent } from './pages/bivhag/selected-writing/selected-writing.component';
import { Blog2Component } from './components/blogs/blog2/blog2.component';
import { ZakatCalculatorComponent } from './pages/zakat-page/zakat-calculator/zakat-calculator.component';
import { ZakatMasalaComponent } from './pages/zakat-page/zakat-masala/zakat-masala.component';
import { NoticeComponent } from './pages/notice/notice.component';
import { Blog3Component } from './components/blogs/blog3/blog3.component';
import { AudioComponent } from './pages/boyan/audio/audio.component';
import { VideoComponent } from './pages/boyan/video/video.component';
import { AboutComponent } from './pages/about/about.component';
import { KhankaComponent } from './pages/about/khanka/khanka.component';
import { ShayekComponent } from './pages/about/shayek/shayek.component';
import { ShajaraComponent } from './pages/about/shajara/shajara.component';
import { Blog4Component } from './components/blogs/blog4/blog4.component';
import { MainComponent } from './layouts/main/main.component';
import { FortyDorudComponent } from './pages/bivhag/forty-dorud/forty-dorud.component';
import { DoyayeAbuDardaRaComponent } from './pages/bivhag/doyaye-abu-darda-ra/doyaye-abu-darda-ra.component';
import { MobileHomeComponent } from './pages/mobile-home/mobile-home.component';
import { AmolComponent } from './pages/amol/amol.component';
import { ZakatMenuComponent } from './pages/zakat/zakat.component';
import { BoyanMenuComponent } from './pages/boyan-menu/boyan-menu.component';
import { DowayeAnasIbneMalekRaComponent } from './pages/bivhag/dowaye-anas-ibne-malek-ra/dowaye-anas-ibne-malek-ra.component';
import { MonjilComponent } from './pages/bivhag/monjil/monjil.component';
import { FortyRabbanaDowaComponent } from './pages/bivhag/forty-rabbana-dowa/forty-rabbana-dowa.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: MobileHomeComponent
      },
      {
        path: 'amol',
        component: AmolComponent
      },
      {
        path: 'zakat-menu',
        component: ZakatMenuComponent
      },
      {
        path: 'boyan-menu',
        component: BoyanMenuComponent
      },
      {
        path: 'salat',
        component: HomeComponent
      },
      {
        path: 'salat-times',
        component: SalatTimesComponent
      },
      {
        path: 'hijri-date',
        component: HijriDateComponent
      },
      {
        path: 'forayez',
        component: ForayezComponent
      },
      {
        path: 'gold-price',
        component: ZakatComponent
      },
      {
        path: 'zakat-calculator',
        component: ZakatCalculatorComponent
      },
      {
        path: 'zakat-masala',
        component: ZakatMasalaComponent
      },
      {
        path: 'zakat-masala/3',
        component: Blog3Component
      },
      {
        path: 'monjil',
        component: MonjilComponent
      },
      {
        path: 'forty-dorud',
        component: FortyDorudComponent
      },
      {
        path: 'forty-rabbana-dowa',
        component: FortyRabbanaDowaComponent
      },
      {
        path: 'doyaye-abu-darda-ra',
        component: DoyayeAbuDardaRaComponent
      },
      {
        path: 'doyaye-anas-ibne-malek-ra',
        component: DowayeAnasIbneMalekRaComponent
      },
      {
        path: 'selected-writings',
        component: SelectedWritingComponent
      },
      {
        path: 'selected-writings/1',
        component: Blog1Component
      },
      {
        path: 'selected-writings/2',
        component: Blog2Component
      },
      {
        path: 'selected-writings/4',
        component: Blog4Component
      },
      {
        path: 'notice',
        component: NoticeComponent
      },
      {
        path: 'audio/:type',
        component: AudioComponent
      },
      {
        path: 'video',
        component: VideoComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'about/khanka',
        component: KhankaComponent
      },
      {
        path: 'about/shayek',
        component: ShayekComponent
      },
      {
        path: 'about/shajara',
        component: ShajaraComponent
      },
    ]
  }

];
