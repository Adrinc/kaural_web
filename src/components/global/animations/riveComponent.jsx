import { useRive, Layout, Fit, Alignment,  EventType, RiveEventType  } from "@rive-app/react-canvas";
import { useEffect } from 'react';

//NOTA: fit puede ser: "cover", "contain", "fill", "fitWidth", "fitHeight"

export const RiveElement = (props) => {
  const { src, stateMachines, autoplay, artboard, fit, hastext=false } = props;
  const { RiveComponent, rive } = useRive({
    src: src,
    stateMachines: stateMachines?? null,
    artboard: artboard ?? null,
    automaticallyHandleEvents: true,
    layout: new Layout({ 
      fit: fit ?? "contain",
      alignment: Alignment.Center,
    }),
    autoplay: autoplay,
  });




  const onRiveEventReceived = (riveEvent) => {
    const eventData = riveEvent.data;
    const eventProperties = eventData.properties;

    if (eventData.type === RiveEventType.General) {
      console.log("Event name", eventData.name);
      // Added relevant metadata from the event
      console.log("Rating", eventProperties.rating);
      console.log("Message", eventProperties.message);

      // Update lable
      let message = eventProperties.message;
      setLable(message);
    } else if (eventData.type === RiveEventType.OpenUrl) {
      console.log("Event name", eventData.name);
      // window.location.href = eventData.url;
    }
  };


  useEffect(() => {
    if (rive) {
      rive.on(EventType.RiveEvent, onRiveEventReceived);
/* 
      const getstateMachines = rive.stateMachineNames.map(getstateMachines => getstateMachines);;
      const artboardNames = rive.contents.artboards.map(artboard => artboard.name);
      console.log(artboardNames);
      console.log(getstateMachines); */

     if(hastext){
      console.log("Tiene texto");
      //imprime solo el arttboard que se esta usando
      console.log(rive.contents.artboards[0].name);
 
/*      console.log("Rive text was initially: ", rive.getTextRunValue("hs3_titulo"));
     rive.getTextRunValue("hs3_titulo"); */
     rive.setTextRunValue("hs3_titulo", "El kaural");
     rive.setTextRunValue("hs3_subtitulo", "Subtitulo muy largo");
     rive.setTextRunValue("hs3_descripcion", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");

 
    }
    }
  }, [rive]);




  return <RiveComponent />;
};

export default function Animation(props) {
  const { src, stateMachines, autoplay, artboard, fit, hastext } = props;
  return (
    <RiveElement 
    style={{width: "100%", height: "100%"}}
    src={src} 
    stateMachines={stateMachines} 
    autoplay={autoplay} 
    artboard={artboard} 
    fit={fit}
    hastext={hastext}
    />
  );
}