<head>
  <meta charset="UTF-8">
  <title><?= get_meta_title() ?></title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
	<meta name="author" content="<?= get_meta_author() ?>">
  <meta name="keywords" content="<?= get_meta_keywords() ?>">
  <meta name="description" content="<?= get_meta_description() ?>">
  <meta name="keywords" content="<?= get_meta_keywords() ?>">
  <?= get_block('opengraph') ?>
  <?= get_codeinject_head() ?>
  <link rel="stylesheet" href="<?= get_asset('css/main.css') ?>">
</head>
