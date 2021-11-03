<?php $items = [1,2,3,4, 5,6,7]; ?>
<?php $topbar = [
  ['Bản đồ', 'map-marker', '#'],
  ['Liên hệ', 'phone', '#'],
  ['Trang nội bộ', 'globe', '#'],
  ['Đăng nhập/ Đăng Ký', 'user', '#']
]; ?>


<header id="" class="header">
    <div class="header__wrapper">
      <div class="header__row header__row--top bg-light">
        <div class="container header__container">
          <div class="grid header__grid">
            <div class="grid__col header__col header__col--blog-info">
              <p class="header--blog-info">
                <a href="mailto:hanoibvt@gmail.com"><i class="fa fa-envelope" aria-hidden="true"></i>hanoibvt@gmail.com</a>
              </p>
            </div>
            <div class="grid__col header__col header__col--top-navigation">
              <nav class="header__nav">
                <ul class="header__menu">
                  <?php foreach ($topbar as $item) : ?>
                    <li id=""class="menu-item">
                      <i class="fa fa-<?php echo $item[1]; ?>" aria-hidden="true"></i>
                      <a href="<?php echo $item[2]; ?>"><?php echo $item[0]; ?></a>
                    </li>
                  <?php endforeach; ?>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="header__row header__row--main">
        <div class="container header__container">
          <div class="grid header__grid">
            <a href="/" class="grid__col header__col header__col--logo">
              <picture class="logo__image">
                <img class="image__img" src="./assets/images/logo.jpg" alt="">
              </picture>
            </a>

            <div class="grid__col header__col header__col--banner">
              <picture class="logo__image">
                <img class="image__img" src="./assets/images/homepage/header-banner.png" alt="">
              </picture>
            </div>

            <div class="header__col--mobile-button">
              <button class="header__mobile-button js-open-btn" aria-label="Open a mobile menu">
              <img class="image__img" src="./assets/images/homepage/openmenu.png" alt="">
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="header__row header__row--navigation">
          <div class="container header__container">
              <div class="grid header__grid">
                  <div class="grid__col header__col header__col--navigation">
                      <nav class="header__nav">
                          <ul id="" class="header__menu">
                              <li id="" class="menu-item mega-menu menu-item-has-children">
                                  <a href="">Trang Chủ</a>
                              </li>
                              <li id="" class="menu-item mega-menu menu-item-has-children">
                                  <a href="">Giới thiệu<i class="fa fa-angle-down" aria-hidden="true"></i></a>
                                  
                                  <div class="sub-menu">
                                    <ul id="" class="header__menu">
                                        <li id="" class="menu-item mega-menu menu-item-has-children">
                                            <a href=""><span>Thông tin khái quát</span></a>
                                        </li>
                                        <li id="" class="menu-item mega-menu menu-item-has-children">
                                            <a href=""><span>Lịch sử hình thành</span></a>
                                        </li>
                                        <li id="" class="menu-item mega-menu menu-item-has-children">
                                            <a href=""><span>Cơ cấu tổ chức</span></a>
                                        </li>
                                        <li id="" class="menu-item mega-menu menu-item-has-children">
                                            <a href=""><span>Khối chuyên môn</span> <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                            <div class="sub-menu">
                                              <ul id="" class="header__menu">
                                                  <li id="" class="menu-item mega-menu menu-item-has-children">
                                                      <a href=""><span>Phòng công nghệ thông tin</span></a>
                                                  </li>
                                                  <li id="" class="menu-item mega-menu menu-item-has-children">
                                                      <a href=""><span>Phòng quản lý chất lượng</span></a>
                                                  </li>
                                              </ul>
                                            </div>
                                        </li>
                                        <li id="" class="menu-item mega-menu menu-item-has-children">
                                            <a href=""><span>Khối văn phòng</span> <i class="fa fa-angle-right" aria-hidden="true"></i></a>   
                                            <div class="sub-menu">
                                              <ul id="" class="header__menu">
                                                  <li id="" class="menu-item mega-menu menu-item-has-children">
                                                      <a href=""><span>Phòng công nghệ thông tin</span></a>
                                                  </li>
                                                  <li id="" class="menu-item mega-menu menu-item-has-children">
                                                      <a href=""><span>Phòng quản lý chất lượng</span></a>
                                                  </li>
                                              </ul>
                                            </div>
                                        </li>
                                        <li id="" class="menu-item mega-menu menu-item-has-children">
                                            <a href=""><span>Thông tin bác sĩ</span></a>
                                        </li>
                                        <li id="" class="menu-item mega-menu menu-item-has-children">
                                            <a href=""><span>Quản lí chất lượng</span></a>
                                        </li>
                                        <li id="" class="menu-item mega-menu menu-item-has-children">
                                            <a href=""><span>Chứng chỉ và Giải thưởng</span></a>
                                        </li>
                                    </ul>
                                  </div>
                              </li>
                              <li id="" class="menu-item mega-menu menu-item-has-children">
                                  <a href="">Danh mục sản phẩm</a>
                              </li>
                              <li id="" class="menu-item mega-menu menu-item-has-children">
                                  <a href="">Liên hệ</a>
                              </li>
                          </ul>
                      </nav>
                  </div>
              </div>
          </div>
      </div>
    </div>
</header>