import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule, RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

export class InicioComponent {
  // Array de preguntas 
  preguntas = [
    {
      pregunta: '¿Cuál es el funcionamiento de la aplicación?',
      respuesta: 'Esta aplicación te sirve para cuando tengas una situación incómoda o peligrosa al ir sola por la calle, es posible poder interactuar con otras mujeres, ya sea cerca o lejos de tu misma situación.',
      mostrar: true
    },

    {
      pregunta: '¿Para quienes va dirigida?',
      respuesta: 'Esta aplicación va especialmente dirigidas a mujeres, pero eso no quiere decir que la puedan usar también hombres. De hecho ellos pueden usarlo para poder ayudar a otras mujeres o incluso para ellos mismos si se sienten en un caso similiar al que pasamos las mujeres',
      mostrar: false
    },
    
    {
      pregunta: '¿Cómo puedo saber que hay mujeres cerca de mi?',
      respuesta: 'Para saber si hay mujeres cerca de ti, hay una sección abajo donde te indica que es el mapa y una especie de circulo que simula la ubicación de dicha persona',
      mostrar: false
    },

    {
      pregunta: '¿Es necesario tener mi ubicación activada para usar la aplicación?',
      respuesta: 'Necesario como tal, no hace falta pero si que es totalmente recomendable por si llegara a pasar algun tipo de inconcveniente. Además que de esta forma puedes estar ubicada y que los demás sepan dónde estas',
      mostrar: false
    },

    {
      pregunta: '¿Cómo puedo empezar a chatear con otras mujeres?',
      respuesta: 'Muy sencillo, existe una sección de explorar que te permite buscar mujeres que sea afines a ti. Te muestra perfiles de como son, dónde viven, si te concuerda su descripción podrás chatear con ella apretando al boton de Chatear. De este modo se establecerá una conversación',
      mostrar: false
    },

    {
      pregunta: '¿El botón de emergencia envía una alerta a alguien automáticamente?',
      respuesta: 'No, el botón de emergencia solo se enviará a la policía, ya como su propio nombre lo indica, al ser una emergencia es de un carácter más grave que debe de ser imprenscindible para las autoridades y poner en marcha un plan',
      mostrar: false
    },

    {
      pregunta: '¿Se puede bloquear a alguien en el chat si no me siento cómoda?',
      respuesta: 'Si, se puede llegar a bloquear a usuarios que no te llegues a sentir cómoda, esto de normal no suele ocurrir ya que previamente se realiza un test de confedicacidad para saber que usuarios estan registrados y que no hagan sentir al resto de usuarias incómodas dentro de la  aplicación',
      mostrar: false
    },

    {
      pregunta: '¿Es necesario registarme en la aplicación para así usarla?',
      respuesta: 'Si, es totalmente necesario, sin esto no se podrá a llegar a usar la aplicación correctamente',
      mostrar: false
    }, 

    {
      pregunta: '¿Cómo puedo reportar a un usuario?',
      respuesta: 'Si te encuentras con un usuario que infringe las normas de la comunidad o te hace sentir incómoda, puedes reportarlo desde su perfil. El equipo de moderación revisará la situación y tomará las medidas necesarias.',
      mostrar: false
    },

    {
      pregunta: '¿Puedo elegir con quién hablar?',
      respuesta: 'Sí, puedes seleccionar con quién deseas interactuar. La aplicación te mostrará perfiles de mujeres con intereses similares, pero solo tú decides con quién iniciar una conversación.',
      mostrar: false
    },

    {
      pregunta: '¿Puedo ocultar mi ubicación?',
      respuesta: 'Sí, puedes gestionar la visibilidad de tu ubicación desde la configuración de la aplicación. Sin embargo, algunas funciones pueden verse limitadas si decides ocultarla.',
      mostrar: false
    },

    {
      pregunta: '¿Qué hago si me encuentro en una situación de emergencia?',
      respuesta: 'Si estás en una situación de emergencia, puedes presionar el botón de emergencia en la aplicación. Este notificará a las autoridades y, si lo tienes configurado, también enviará una alerta a tus contactos de confianza.',
      mostrar: false
    },

    {
      pregunta: '¿Cómo garantizan la seguridad de las usuarias?',
      respuesta: 'La seguridad es nuestra prioridad. Implementamos procesos de verificación de usuarios, encriptación de mensajes y un sistema de reportes para asegurar un espacio seguro para todas.',
      mostrar: false
    },

    {
      pregunta: '¿Puedo personalizar mi perfil?',
      respuesta: 'Sí, puedes agregar una foto, una breve descripción y seleccionar intereses para que otras usuarias puedan conocerte mejor.',
      mostrar: false
    },

    {
      pregunta: '¿Qué datos personales son visibles para otras usuarias?',
      respuesta: 'Solo la información que decides compartir en tu perfil es visible para otras usuarias. Tu número de teléfono y otros datos sensibles permanecen privados.',
      mostrar: false
    },

    {
      pregunta: '¿La aplicación está disponible en otros países?',
      respuesta: 'Sí, la aplicación puede usarse en varios países. Sin embargo, la cantidad de usuarias disponibles cerca de ti dependerá de la popularidad en tu región.',
      mostrar: false
    }
  ]
  

  togglePreguntas(index: number) {
    this.preguntas.forEach((pregunta, i) => {
      if (i !== index) pregunta.mostrar = false;
    });

    this.preguntas[index].mostrar = !this.preguntas[index].mostrar;
  }
}
