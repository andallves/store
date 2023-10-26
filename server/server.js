const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors({ origin: true, credentials: true }));

const stripe = require('stripe')(
  'sk_test_51O5XfzHZVWm5g6bwO4EyAvx3Lx1vgIFvfkasGKnfTLljYidRJRrNwO6A8D3iRDnvl8esHivnto2Gh2bfw8UPVMed00CUFLsuMX',
);

app.post('/checkout', async (req, res, next) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: req.body.items.map((item) => ({
        currency: 'brl',
        product_data: {
          name: item.name,
          images: [item.product],
        },
        unit_amount: item.price * 100,
      })),
      mode: 'payment',
      success_url: '',
    });
  } catch (err) {}
});
