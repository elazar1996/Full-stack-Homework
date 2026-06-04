const paymentGateway = {
  gatewayName: "Stripe",

  processPayment: function () {
    console.log(`Processing payment through ${this.gatewayName}`);
  },
};
paymentGateway.processPayment();

const externalProcessor = paymentGateway.processPayment;

externalProcessor();

boundProcessor = paymentGateway.processPayment.bind(paymentGateway);
boundProcessor();
