@php
    $navItems = [
        ['name' => 'Inicio', 'route' => 'index'],
        ['name' => 'Portafolio', 'route' => 'portfolio'],
        ['name' => 'Blog', 'route' => 'blog'],
        ['name' => 'Contactanos', 'route' => 'contact-us'],
        ['name' => 'Acerca de Mi', 'route' => 'about-us'],
        ['name' => 'CV', 'route' => 'curriculum'],
    ];
@endphp
<header id="header" class="fixed-top">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container px-lg-5">
            <a class="navbar-brand" href="#!">Start Bootstrap</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    @foreach ($navItems as $item)
                        <li class="nav-item">
                            <a class="nav-link {{ Route::currentRouteName() === $item['route'] ? 'active' : '' }}" href="{{ route($item['route']) }}">
                                {{ $item['name'] }}
                            </a>
                        </li>
                    @endforeach
                </ul>
            </div>
        </div>
    </nav>
</header>