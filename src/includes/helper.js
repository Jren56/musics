export default {
    formatTime(time) {
        const minutes = Math.floor(time /60) || 0;
        const seconds = Math.round((time - minutes * 60) || 0) == 60 ? 0 : Math.round((time - minutes * 60));

        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
}