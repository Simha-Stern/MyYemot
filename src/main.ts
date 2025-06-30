import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module'; // ייבא את AppModule
import 'zone.js';

platformBrowser()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
