    import { css } from "lit-element";

    export default css `
    body {
        background: #84bbf4 !important;
    }

    .form {
        background: #84bbf4;
        padding: 98px;
        border-radius: 20px;
    }

    .form-check-input {
        margin-right: 10px;
    }

    .input-group-text {
        background-color: #005187;
        color: #000000;
    }

    .form-control::placeholder {
        color: #000000;
    }

    .form-control {
        background-color: #ffffff;
        color: #000000;
    }

    .btn {
        background: #84bbf4;
        border-radius: 0 0 20px 20px;
        border: none;
    }

    /* Estilos para la imagen */
    .image-container {
        position: relative;
    }

    .image-container img {
        position: relative;
        z-index: 1;
        margin-top: -8.5rem;
    }
    `