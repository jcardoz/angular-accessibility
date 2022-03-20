/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

// TODO: #4. Define unique page titles - add imports

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'a11y in Angular';
  isDark: boolean | undefined;
  bodyStyles: CSSStyleDeclaration | undefined;

  // TODO: #4. Define unique page titles - add the TitleService and Router.
  constructor(private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.setTitle();
  }

  private setTitle() {
    const appTitle = this.titleService.getTitle();
    this.router
      .events.pipe(
        // filter navigation end events
        filter(event => event instanceof NavigationEnd),
        map(() => {
          // check if the data property has a title attribute and return that
          const child = this.activatedRoute.firstChild;
          if (child?.snapshot.data.title) {
            return child?.snapshot.data.title;
          }
          // return the default app title otherwise
          return appTitle;
        })
      ).subscribe((title: string) => {
        // finally - set the title
        this.titleService.setTitle(title);
      });
  }
}
