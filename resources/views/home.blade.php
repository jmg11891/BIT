@extends('layouts.app')

@section('content')
<div class="container">
    @if(auth())
        <router-view/>
    @endif
    </div>
</div>
@endsection
