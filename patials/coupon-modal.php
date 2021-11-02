<?php 
$items = [
  [
    'title' => 'Freeship',
    'description' => 'Miễn phí ship cho đơn hàng tối thiểu 100k'
  ],
  [
    'title' => 'Giảm 10k',
    'description' => 'Miễn phí ship cho đơn hàng tối thiểu 100k'
  ],
  [
    'title' => 'Giảm 20K',
    'description' => 'Miễn phí ship cho đơn hàng tối thiểu 100k'
  ],
  [
    'title' => 'Giảm 50%',
    'description' => 'Miễn phí ship cho đơn hàng tối thiểu 100k'
  ]
]
?>
<div class="modal__overlay js-overlay js-close-modal"></div>
<div class="modal js-modal">
  <div class="modal__wrapper">
    <div class="modal__header">
      <div class="modal__title">coupon</div>
      <i class="fa fa-times js-close-modal"></i>
    </div>
    <div class="modal__content">
      <?php foreach ($items as $item) : ?>
        <div class="counpon-item js-counpon-item">
          <img class="image__img" src="./assets/images/thumbnails.jpg" alt="">
          <div class="coupon-item__info">
            <span class="counpon-item__title js-code-coupon"><?php echo $item['title']; ?></span>
            <span class="counpon-item__description"><?php echo $item['description']; ?></span>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</div>