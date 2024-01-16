
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

	//Create a text label and add it to layout.
	txt = app.CreateText( "Hello" )
	txt.SetTextSize( 32 )
	lay.AddChild( txt )
	
	//Add layout to app.	
	app.AddLayout( lay )
}

var address = "http://www.randomfunfacts.com";

app.HttpRequest( "GET", address, null, null, handleReply );

function handleReply( error, reply )
{
    if( error ) alert( reply );
    else
    {
        var funfact = reply.slice( reply.indexOf("<i>") + 3, reply.indexOf("</i>") );
        alert( funfact );
    }
}
