import { NgModule } from "@angular/core";
import { ServerModule } from "@angular/platform-server";

import { AppModule } from "./app.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./component/header/header.component";
import { FooterComponent } from "./component/footer/footer.component";
import { MainComponent } from "./component/main/main.component";

@NgModule({
  imports: [AppModule, ServerModule],
  declarations: [AppComponent, HeaderComponent, FooterComponent, MainComponent],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
