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
  selector: 'speech-logger',
  mode: 'open',
})
export class SpeechLoggerElement
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
    :host {
      display: inline-flex;
    }
  `

  template = html` <!-- <button></button> --> `

  connected() {
    // Do something
    console.log(this.param)
  }
}