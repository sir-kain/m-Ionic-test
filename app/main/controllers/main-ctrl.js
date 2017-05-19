'use strict';
angular.module('main').controller('MainCtrl', function () {
  // function bindEvents (p) {
  //   p.on('error', function (error) {
  //     $log.info('error', error);
  //   });
  //   p.on('signal', function (data) {
  //     var textOffer = document.querySelector('#offer')
  //     textOffer.textContent = JSON.stringify(data)
  //   });
  //   p.on('stream', function (stream) {
  //     var recepteur = document.querySelector('#recepteur')
  //     recepteur.volume = 0
  //     recepteur.src = window.URL.createObjectURL(stream)
  //     recepteur.play()
  //   })
  // }
  // var p = null

  // var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia
  // document.querySelector('#start').addEventListener('click', function (e) {
  //   navigator.getUserMedia({
  //     video: true,
  //     audio: true
  //   }, function (stream) {
  //     p = new SimplePeer({
  //       initiator: true,
  //       stream: stream,
  //       trickle: false
  //     })
  //     // envoie de l'offre
  //     bindEvents(p)
  //     var emeteur = document.querySelector('#emeteur')
  //     emeteur.volume = 0
  //     emeteur.src = window.URL.createObjectURL(stream)
  //     emeteur.play()
  //   }, function () {
  //     $log.log('no')
  //   })
  // })

  // document.querySelector('#inComing').addEventListener('submit', function (e) {
  //   e.preventDefault()
  //   if (p == null) {
  //     p = new SimplePeer({
  //       initiator: false,
  //       trickle: false
  //     })
  //     bindEvents(p)
  //   }
  //   p.signal(JSON.parse(e.target.querySelector('textarea').value))
  // })
  // $log.log('Hello from your Controller: MainCtrl in module main:. This is your controller:', this);
  // this.things = [{
  //   id: 0,
  //   titre: 'je sais pas',
  //   description: 'je suis mrkain'
  // },
  // {id: 1,titre: 'je sais Oui',description: 'je suis pas mrkain'}];

});
