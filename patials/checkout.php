<?php $items = ['First name', 'last name', 'email address', 'mobile phone number', 'address', 'country', 'postxosw/ZIP', 'Town/City'] ?>
<div class="checkout">
  <div class="container">
    <div class="checkout__wrapper">
      <div class="checkout__shipping-details">
        <p class="checkout__shipping-details--title">Shipping Details</p>
        <form action="" class="checkout__form-items">
          <?php foreach ($items as $item) : ?>
            <div class="checkout__form-item">
              <label for=""><?php echo $item;?></label>
              <input type="text">
            </div>
          <?php endforeach; ?>
          <div class="checkout__form-item textarea">
            <label for="">Note</label>
            <textarea name="" id="" cols="30" rows="5"></textarea>
          </div>

          <div class="checkout__form-item checkbox">
            <input type="checkbox" id='address-book'>
            <label for="address-book">Add to address book</label>
          </div>
        </form>
      </div>
      <div class="checkout__info">
        <div class="checkout__my-order">
          <div class="checkout__info-title">My Order</div>
          <div class="checkout__info-product-items">
            <div class="checkout__info-product-item">
              <span class="number bold">1x</span>
              <span class="name gray">LED Monitor With High Quanity In The World</span>
              <span class="prices bold">$976.44</span>
            </div>
            <div class="checkout__info-product-item">
              <span class="number bold">1x</span>
              <span class="name gray">LED Monitor With High Quanity In The World</span>
              <span class="prices bold">$976.44</span>
            </div>
          </div>

          <div class="checkout__subtotal">
            <div class="checkout__subtotal-item">
              <span class="gray">Subtotal</span>
              <span class="bold">$1,954.66</span>
            </div>
            <div class="checkout__subtotal-item">
              <span class="gray">Shipping</span>
              <span><span class="gray">Free Shipping</span> $0</span>
            </div>
            <div class="checkout__subtotal-item">
              <span class="gray">Tax</span>
              <span clas="bold">$4.00</span>
            </div>
          </div>

          <div class="checkout__order-total">
            <span class="bold">Order Total</span>
            <span class="bold">$1,934.55</span>
          </div>
        </div>
        <div class="checkout__payment">
          <div class="checkout__info-title bold">Payment</div>
          <form class="checkout__payment-items">
            <div class="checkout__payment-item">
              <input type="radio" name="payment" id="payment1">
              <label for="payment1">Direct Bank Transfer</label>
            </div>
            <div class="checkout__payment-item">
              <input type="radio" name="payment" id="payment2">
              <label for="payment2">Paypol</label>
            </div>
            <div class="checkout__payment-item">
              <input type="radio" name="payment" id="payment3">
              <label for="payment3">Cash On Delivery</label>
            </div>
          </form>

          <a href="#" class="checkout__place-order">Place order</a>
          <sub class="gray">Lorem Ipsum is simply dummy text of the printing and typesett</sub>
        </div>
      </div>
    </div>
  </div>
</div>