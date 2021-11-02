<?php 
$items = [
  [
    'title' => 'Hộp đựng thực phẩm',
    'sku' => 'SKU 1231333324',
    'image' => 'thum.webp',
    'price' => '$976.69'
  ],
  [
    'title' => 'Ba lô Tee Lee',
    'sku' => 'SKU 123354624',
    'image' => 'thumb1.webp',
    'price' => '$537.43'
  ],
  [
    'title' => 'Bàn làm việc',
    'sku' => 'SKU 12314e4524',
    'image' => 'thumbnails.jpg',
    'price' => '$76.31'
  ],
  [
    'title' => 'Nồi chiên không dầu',
    'sku' => 'SKU 1231424324',
    'image' => 'thumbs11.webp',
    'price' => '$576.33'
  ]
];
?>
<section class="cart">
  <div class="container">
    <div class="cart__wrapper">
      <div class="cart__table">
        <div class="cart-form">
          <div class="cart-form__header">
            <span class="cart-form__action-select-all cart-form__checkbox js-checkbox-all"> Select All</span>

            <button class="cart-form__action-update">Update</button>
            <button class="cart-form__action-remove js-checkbox-remove-all">Remove</button>
          </div>
          <div class="cart-form__main js-main">
            <?php foreach ($items as $item) : ?>
            <div class="cart-form__item js-checkbox-item">
              <span class="cart-form__checkbox js-checkbox-action"></span>
              <div class="cart-form__image"><img class="image__img" src="./assets/images/<?php echo $item['image']; ?>"
                  alt="">
              </div>
              <div class="cart-form__info">
                <div class="cart-form__title">
                  <a href="#"><?php echo $item['title']; ?></a>
                  <span class="sku"><?php echo $item['sku']; ?></span>
                </div>
                <div class="cart-form__price"><?php echo $item['price']; ?></div>
                <div class="cart-form__item-action">
                  <div class="plus-minus js-plus-minus">
                    <span class="minus js-minus fa fa-minus"></span>
                    <span class="quantity js-quantity">1</span>
                    <span class="plus js-plus fa fa-plus"></span>
                  </div>
                  <button class="delete fa fa-trash js-delete-item"></button>
                  <button class="heart fa fa-heart js-heart-item"></button>
                </div>
              </div>
            </div>
            <?php endforeach; ?>
          </div>
        </div>
      </div>
      <div class="cart__sidebar">
        <div class="cart__coupon js-open-modal">
          <img class="image__img" src="./assets/images/coupon.png" alt="">
          <span class="js-code-input">I have a promo code</span>
          <i class="fa fa-caret-right"></i>
        </div>
        <div class="cart__shopping-summary">
          <p>Shopping Summary</p>
          <p class="total">Total <span class="price">$152.66</span></p>
          <button>CHECKOUT</button>
          <a href="#">Back to Shopping</a>
        </div>
      </div>
    </div>
  </div>
</section>