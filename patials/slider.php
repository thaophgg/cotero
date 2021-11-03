<?php 
$items = [
  [
    'name' => 'Fitness and activity Tracker',
    'price' => '$33.3'
  ],
  [
    'name' => 'Ice White Airpods',
    'price' => '$512.3'
  ],
  [
    'name' => 'Fitness and activity Tracker',
    'price' => '$33.3'
  ],
  [
    'name' => 'Xbox White Jaystick',
    'price' => '$645.3'
  ],
  [
    'name' => 'Hazor Mouse Gaming',
    'price' => '$444.3'
  ],
  [
    'name' => 'Fitness and activity Tracker',
    'price' => '$32.3'
  ],
  [
    'name' => 'Fitness and activity Tracker',
    'price' => '$34.3'
  ],
  [
    'name' => 'Supper Boost Headphones',
    'price' => '$554.3'
  ]
]
?>
<div class="recently-viewed">
  <div class="container">
    <div class="recently-viewed__title">Recently Viewed</div>
    <div class="recently-viewed__slider js-slider">
      <?php foreach ($items as $item) : ?>
      <div class="recently-viewed__item">
        <div class="recently-viewed__item-image">
          <img class="image__img" src="./assets/images/watch.jpg" alt="">
        </div>
        <div class="recently-viewed__item-content">
          <a href="#" class="recently-viewed__name bold"><?php echo $item['name']; ?></a>
          <p class="recently-viewed__price bold"><?php echo $item['price']; ?></p>
          <p class="recently-viewed__stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <span class="gray">(12)</span>
          </p>
        </div>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</div>