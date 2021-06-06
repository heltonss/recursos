import { css, CustomElement, html } from '@devpr/common-web'

import './app.element.scss'

@CustomElement('devpr-root')
export class AppElement extends HTMLElement {
  public static observedAttributes = []

  styles = css``
  template = html`
    <header>
      <a>
        <img src="assets/devparana.svg" width="100" alt="Dev Paraná" />
      </a>
    </header>

    <!-- <form-page></form-page> -->

    <!-- <hr /> -->

    <table-page></table-page>
  `

  connectedCallback() {
    console.log('example')
  }
}
