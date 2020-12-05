<template>
        <section class="page-section" id="contact">
            <!-- Contact-->
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Contáctanos</h2>
                    <h3 class="section-subheading text-muted">Déjenos conocer su solicitud.</h3>
                </div>
                <form id="contactForm" name="sentMessage" novalidate="novalidate">
                    <div class="row align-items-stretch mb-5">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input class="form-control" id="name" type="text" placeholder="Su nombre *" required="required" data-validation-required-message="Registre un nombre." />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="form-group">
                                <input class="form-control" id="email" type="email" placeholder="Su correo *" required="required" data-validation-required-message="Registre su dirección de correo electrónico." />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="form-group mb-md-0">
                                <input class="form-control" id="phone" type="tel" placeholder="Su número celular *" required="required" data-validation-required-message="Ingrese un numero telefonico." />
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group form-group-textarea mb-md-0">
                                <textarea class="form-control" id="message" placeholder="Su mensaje *" required="required" data-validation-required-message="Debe registrar un mensaje."></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <div id="success"></div>
                        <button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Enviar mensaje</button>
                    </div>
                </form>
            </div>
        </section>
</template>

<script>
    export default {
        name: "FormContact",
        props: ['']
    };
</script>

<style scoped>

</style>