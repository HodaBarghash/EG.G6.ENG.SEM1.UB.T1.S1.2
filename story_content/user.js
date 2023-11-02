function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5g3TCFjkHCH":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbz5TzbdgUekQ8_0J8V74HpRevX4Ly_mVGqZe54ICfe5FXvXMyWv09smGrDIWnO_9pda/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v26q1attempts:player.GetVar("v26q1attempts"),v26q1answeredcorrect:player.GetVar("v26q1answeredcorrect"),v26q2attempts:player.GetVar("v26q2attempts"),v26q2answeredcorrect:player.GetVar("v26q2answeredcorrect"),v26q3attempts:player.GetVar("v26q3attempts"),v26q3answeredcorrect:player.GetVar("v26q3answeredcorrect")})
	}
	)
}

