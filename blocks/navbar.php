<header>
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="/">
      <?= get_label('Home') ?>
    </a>

    <button type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbar-content"
            aria-controls="navbar-content"
            aria-expanded="false"
            aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navbar-content" class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <?= build_nav(10000, 1, 'navbar-nav mr-auto', 'nav', null, 'nav-item', 'nav-link') ?>
      </ul>
    </div>
  </nav>
</header>
