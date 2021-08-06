import {
  css,
  html,
  event,
  listen,
  Emitter,
  Connected,
  Component,
  Autonomous,
} from '@devpr/web-core'

@Autonomous({
  selector: 'devpr-eye-hole',
  mode: 'open',
})
export class EyeHoleElement
  extends Component(HTMLElement)
  implements Connected {
  static observed = ['param']

  public param: string

  @event()
  onClick: Emitter<MouseEvent>

  @listen('button', 'click')
  onClicked(event: Event) {
    this.onClick.emit(event.target)
  }

  styles = css`
    .wrapper {
      --color: #1f242d;
      --color-invert: #ffffff;
      --clip-path: circle(15px at left);
      --clip-path-hover: circle(70px at left);
      --clip-path-clicked: circle(100vw at left);
      --duration: 0.4s;
      --timing-function: ease;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    .wrapper .video {
      height: 100vh;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 15px;
      clip-path: var(--clip-path);
      transition: clip-path var(--duration) var(--timing-function);
    }
    .video video {
      position: fixed;
      background: #c4cbde;
      top: 50%;
      left: 50%;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      transform: translate(-50%, -50%);
    }
    .text {
      position: relative;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.2px;
      opacity: var(--opacity, 1);
      transition: opacity 0.3s var(--timing-function) 0.2s;
    }
    .text::before,
    .text::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: -1px;
      right: 25px;
      height: 0;
    }
    .text::before {
      box-shadow: 26px 0 0 1px var(--color);
      right: var(--r, 100%);
      opacity: var(--opacity, 0);
      transition: right 0.5s ease-in, opacity 0.1s linear;
    }
    .text::after {
      box-shadow: 26px 0 0 1px var(--color-invert);
      clip-path: var(--clip-path);
      transition: clip-path var(--duration) var(--timing-function);
    }

    .text > span::after {
      content: attr(data-text);
      padding-left: 26px;
    }
    .text > span::before {
      color: var(--color);
    }
    .text > span::after {
      color: var(--color-invert);
      clip-path: var(--clip-path);
      transition: clip-path var(--duration) var(--timing-function);
      position: absolute;
      left: 0;
    }

    input {
      width: 220px;
      height: 40px;
      margin: auto;
      position: absolute;
      left: 0;
      right: 0;
      border-radius: 40px;
      outline: none;
      z-index: 2;
      appearance: none;
      cursor: pointer;
    }
    input:focus {
      outline: 0;
    }
    input:hover ~ .video {
      clip-path: var(--clip-path-hover);
    }

    input:hover ~ .text::before {
      --r: 25px;
      --opacity: 1;
    }
    input:hover ~ .text::after {
      clip-path: var(--clip-path-hover);
    }
    input:hover ~ .text span::after {
      clip-path: var(--clip-path-hover);
    }

    input:checked {
      width: 100%;
      height: 100%;
      border-radius: 0;
    }
    input:checked ~ .video {
      clip-path: var(--clip-path-clicked);
    }

    input:checked ~ .text {
      --opacity: 0;
      transition: opacity 0.3s var(--timing-function);
    }
    .text&::after {
      clip-path: var(--clip-path-clicked);
    }
    span > ::after {
      clip-path: var(--clip-path-clicked);
    }

    :host {
      background: #212121;
      height: 100vh;
      font: 400 16px 'Poppins', sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .socials {
      position: fixed;
      display: block;
      left: 20px;
      bottom: 20px;
      z-index: 9999;
    }
    .socials > a {
      display: block;
      width: 30px;
      opacity: 0.2;
      transform: scale(var(--scale, 0.8));
      transition: transform 0.3s cubic-bezier(0.38, -0.12, 0.24, 1.91);
    }
    .socials:hover {
      --scale: 1;
    }
  `

  template = html`
    <div class="wrapper">
      <input type="checkbox" />
      <div class="video">
        <!-- <iframe src="https://www.youtube.com/embed/yAgpcL3j4FU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
        <video src="/assets/conf.mp4" loop playsinline></video>
      </div>
      <div class="text">
        <span data-text="Watch the video"></span>
      </div>
    </div>
  `

  connected() {
    // Do something
    console.log(this.param)
  }
}
