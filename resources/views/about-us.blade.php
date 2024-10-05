@php
    $habilities = [
        [ 'title'=> 'Desarrollo de Sistemas y Aplicaciones', 'text' => 'Tengo un sólido conocimiento en el desarrollo de aplicaciones web y de escritorio, así como en la creación de sitios web que cumplen con las necesidades específicas de mis clientes.','image'=> 'https://dummyimage.com/600x400/343a40/6c757d'],
        [ 'title'=> 'Implementación de Funcionalidades', 'text' => 'Me especializo en implementar nuevas funcionalidades tanto en sistemas web como en aplicaciones de escritorio, asegurando que cada elemento funcione a la perfección y mejore la experiencia del usuario','image'=>'https://dummyimage.com/600x400/343a40/6c757d'],
        [ 'title'=> 'Colaboración en Proyectos', 'text' => 'Disfruto trabajar en equipo y colaborar en proyectos de desarrollo de software. Mi enfoque es siempre aportar ideas y soluciones que impulsen el avance del equipo y el éxito del proyecto.','image'=>'https://dummyimage.com/600x400/343a40/6c757d'],
        [ 'title'=> 'Corrección de Errores', 'text' => 'Soy meticuloso en la identificación y corrección de errores en sistemas y aplicaciones, lo que me permite garantizar que los productos sean confiables y de alta calidad.','image'=>'https://dummyimage.com/600x400/343a40/6c757d'],
        [ 'title'=> 'Administración de Sitios Web', 'text' => 'También tengo experiencia en la administración y mantenimiento de sitios web, asegurando que estén actualizados y funcionando de manera óptima.','image'=>'https://dummyimage.com/600x400/343a40/6c757d'],
        [ 'title'=> 'Pruebas Unitarias', 'text' => ' Realizo pruebas unitarias exhaustivas para asegurar que cada componente de software cumpla con los estándares de calidad necesarios, minimizando errores y mejorando la robustez del sistema.','image'=>'https://dummyimage.com/600x400/343a40/6c757d']
    ]
@endphp
<x-app-layout>
    <x-title>
        <!--<h2 class="fw-bolder"> ¿Necesitas implementar nuevas funciones a tu proyecto de software?</h2>
        <h2 class="fw-bolder"> ¿Necesitas un proyecto de software? </h2>
        <h2 class="fw-bolder"> ¿Necesitas colaboración en algun proyecto de desarrollo de software? </h2>
        <h2 class="fw-bolder"> ¿Algo no esta funcionando correctamente en tu aplicación? </h2>
        <h2 class="fw-bolder"> ¿Necesitas un administrador de tu sitio web? </h2>-->
        <p class="lead mb-0">
            Soy un desarrollador de software con un enfoque por crear soluciones eficientes y  funcionales . Mi experiencia abarca una amplia gama de actividades  que me permiten 
            <b> contribuir de manera integral en proyectos de desarrollo de software</b>. Mis principales habilidades incluyen:
        </p>
    </x-title>
<div class="container">   
    @foreach($habilities as $index => $hability)
        <x-habilities sort="{{ $index % 2 == 0 ? 'order-first' : 'order-first order-lg-last' }}" image="{{ $hability['image'] }}" 
        title="{{ $hability['title'] }} " 
        text="{{ $hability['text'] }}">
        </x-habilities> 
    @endforeach
    <!-- Team members section-->
    <section class="py-5">
        <div class="container px-5 my-5">
            <div class="text-center">
                <h2 class="fw-bolder">Our team</h2>
                <p class="lead fw-normal text-muted mb-5">Dedicated to quality and your success</p>
            </div>
            <div class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                <div class="col mb-5 mb-5 mb-xl-0">
                    <div class="text-center">
                        <img class="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                        <h5 class="fw-bolder">Ibbie Eckart</h5>
                        <div class="fst-italic text-muted">Founder &amp; CEO</div>
                    </div>
                </div>
                <div class="col mb-5 mb-5 mb-xl-0">
                    <div class="text-center">
                        <img class="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                        <h5 class="fw-bolder">Arden Vasek</h5>
                        <div class="fst-italic text-muted">CFO</div>
                    </div>
                </div>
                <div class="col mb-5 mb-5 mb-sm-0">
                    <div class="text-center">
                        <img class="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                        <h5 class="fw-bolder">Toribio Nerthus</h5>
                        <div class="fst-italic text-muted">Operations Manager</div>
                    </div>
                </div>
                <div class="col mb-5">
                    <div class="text-center">
                        <img class="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                        <h5 class="fw-bolder">Malvina Cilla</h5>
                        <div class="fst-italic text-muted">CTO</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
    
</x-app-layout>