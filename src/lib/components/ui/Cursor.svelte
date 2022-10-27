<script lang="ts">
    import { browser } from "$app/env";

    import { onDestroy, onMount } from "svelte";

    let innerWidth:number
    let innerHeight:number
    let mouseX:number
    let mouseY:number

    let cursor
    let cursorElement
    let updateInterval

            cursor =  {
                el: cursorElement,
                x: innerWidth/2,
                y: innerHeight/2,
                w: 30,
                h: 30,
                update:function() {
                    var l = this.x-this.w/2;
                    var t = this.y-this.h/2;
                    // this.el.css({ 'transform':'translate3d('+l+'px,'+t+'px, 0)' });
                }
            }

    // init Interval
    onMount(() => {
        if(browser) {
            // console.log('initted')
            updateInterval = setInterval(move,1000/60);
        }
    })

    // Clear interval on destroy
    onDestroy(() => {
        clearInterval(updateInterval)
    })

    const mouseMove  = (e) => {
        mouseX = e.clientX  ;
        mouseY = e.clientY;
    };

    // getElementsByClassName('a, .swiper-pagination, .swiper-buttons, button, .button, .btn').hover(function() {
        // $('.cursor').addClass("cursor-zoom");
    // }, function(){
        // $('.cursor').removeClass("cursor-zoom");
    // });

    function move() {
        cursor.x = lerp (cursor.x, mouseX, 0.1);
        cursor.y = lerp (cursor.y, mouseY, 0.1);
        cursor.update()
    }

    function lerp (start, end, amt) {
        return (1-amt)*start+amt*end
    }

    $: outerWidth = 0
    $: innerWidth = 0
    $: outerHeight = 0
    $: innerHeight = 0
    $: mouseX=innerWidth/2
    $: mouseY=innerHeight/2

</script>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<svelte:body
on:mousemove={(event) => {mouseMove(event)}}
/>

<!-- cursor -->
<div class="cursor" bind:this={cursorElement}></div>
