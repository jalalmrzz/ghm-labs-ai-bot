import { Howl } from 'howler';

// Placeholders for sounds - in a real app, these would be in /assets/sounds/
const clickSound = new Howl({ src: ['https://assets.mixkit.co/sfx/preview/mixkit-mechanical-button-2110.mp3'], volume: 0.1 });
const successSound = new Howl({ src: ['https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3'], volume: 0.2 });
const errorSound = new Howl({ src: ['https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3'], volume: 0.2 });

export const playClick = () => clickSound.play();
export const playSuccess = () => successSound.play();
export const playError = () => errorSound.play();
