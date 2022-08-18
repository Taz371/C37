class Form 
{
  constructor() 
  {
    this.input = createInput("").attribute("placeholder", "Enter Your Name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greetings = createElement("h2");
  }

  setPosition()
  {
    this.titleImg.position(120.100);
    this.input.position(width/2 - 100, height/2 - 80);
    this.playButton.position(width/2 - 90, height/2 -20);
    this.greetings.position(width/2 - 300, height/2 - 100);
  }

  hide()
  {
    this.greetings.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed()
  {
    this.playButton.mousePressed(()=>
    {
      this.input.hide();
      this.playButton.hide();
      var message = ` Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greetings.html(message);

    })
  }

  display()
  {
    this.setPosition();
    this.handleMousePressed()
  }
}
