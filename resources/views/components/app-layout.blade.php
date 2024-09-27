<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Heroic Features - Start Bootstrap Template</title>
        @vite(['resources/sass/app.scss', 'resources/js/app.js','resources/css/app.css'])
    </head>
    <body>
      
        @include('layouts.navigation')
       {{ $slot }}
        <!-- Footer-->
        @include('layouts.footer')
        <!-- Bootstrap core JS
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>-->
        <!-- Core theme JS-->
    </body>
</html>