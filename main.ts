namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const flower = SpriteKind.create()
    export const bee = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hops_and_paws.vy == 0) {
        hops_and_paws.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (hops_and_paws.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.flower, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    bee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bee,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 1 1 1 1 1 f f 1 . . . . . . . 
        f f f f f f f f f . . . . . . . 
        1 1 1 1 1 1 1 1 5 . . . . . . . 
        . 5 5 5 f 5 5 5 5 f . . . . . . 
        f 5 5 5 f 5 5 5 5 f . . . . . . 
        f f 5 5 f 5 5 5 f f . . . . . . 
        f 5 5 5 f 5 5 5 5 . . . . . . . 
        . f f f f f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . 5 5 5 f 5 5 5 5 f . . . . . . 
        f 5 5 5 f 5 5 5 5 f . . . . . . 
        f f 5 5 f 5 5 5 f f . . . . . . 
        f 5 5 5 f 5 5 5 5 . . . . . . . 
        . f f f f f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    bee.setPosition(0 + hops_and_paws.y, hops_and_paws.y - 80)
    bee.follow(hops_and_paws)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.setGameOverEffect(false, effects.melt)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
let bee: Sprite = null
let flower: Sprite = null
let coin: Sprite = null
let hops_and_paws: Sprite = null
scene.setBackgroundColor(9)
hops_and_paws = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . d d d d . . . . . . . . . . 
    . . d 3 7 d . . . . . . . . . . 
    . . d e e d . . . . . . . . . . 
    . . 6 6 6 6 . . . . . . . . . . 
    e e 6 6 6 6 e e . . . . . . . . 
    . . f f f f . . . . . . . . . . 
    . . f . . f . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(hops_and_paws, 100, 0)
tiles.setCurrentTilemap(tilemap`level2`)
hops_and_paws.ay = 350
scene.cameraFollowSprite(hops_and_paws)
info.setLife(5)
for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
    coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . f 8 8 8 8 8 8 8 f . . . . . . 
        f 8 7 7 7 7 7 7 8 8 f . . . . . 
        f 7 8 8 8 8 8 8 8 8 f . . . . . 
        f 7 8 8 8 8 8 8 8 8 f . . . . . 
        f 7 8 8 8 8 8 8 8 8 f . . . . . 
        f 7 8 8 8 8 8 8 8 8 f . . . . . 
        f 7 8 8 8 8 8 8 8 8 f . . . . . 
        f 7 8 7 7 7 8 8 8 8 f . . . . . 
        . f 8 8 8 8 8 8 8 f . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coin)
    tiles.setTileAt(value, assets.tile`transparency16`)
    tiles.placeOnTile(coin, tiles.getTileLocation(0, 0))
}
for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
    flower = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 c c 2 . . . . . . . . . 
        . . . c 4 4 c c . . . . . . . . 
        . . . c 4 4 c c . . . . . . . . 
        7 7 . 2 c c 2 . . 7 7 . . . . . 
        7 7 7 . 7 7 . . . 7 7 . . . . . 
        8 7 7 . 7 7 . . 7 7 7 . . . . . 
        8 7 7 7 7 7 7 7 7 7 8 . . . . . 
        8 7 7 7 7 7 7 7 7 8 . . . . . . 
        8 8 8 7 7 7 7 8 8 . . . . . . . 
        `, SpriteKind.flower)
    tiles.placeOnTile(flower, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.onUpdate(function () {
    hops_and_paws.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f f . . . 
        . . . . . . . . . . f f f f . . 
        . . . . . . . . . . f 7 f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f . . . . . 
        . . f f f f f f f f f . . . . . 
        . . f . f . f . f . f . . . . . 
        `)
    if (hops_and_paws.vy > 0) {
        hops_and_paws.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f f f f . . . 
            . . . . . . . . f f f 7 f . . . 
            . . . . . . . . f f f f f . . . 
            f . . . . . f f f 1 . . . . . . 
            f . . . . f f f 1 1 . . . . . . 
            f . . . f f f f 1 1 . . . . . . 
            f . . f f f f 1 f . . . . . . . 
            f . . f f f 1 1 f . . . . . . . 
            f . f f f 1 1 . f f . . . . . . 
            . f f f 1 1 . . . f f . . . . . 
            . . . f f . . . . . . . . . . . 
            . . . . f f . . . . . . . . . . 
            `)
    } else if (hops_and_paws.vy > 0) {
        hops_and_paws.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f . . . . . . . . f f . . . 
            . . f . . . . . . . f f f f . . 
            . . f f . . . . . . f f 7 f f . 
            . . . f . . . . . . f f f f f . 
            f . . f f . . . . . . f f f f . 
            f . . . f f f f f f f f f . . . 
            f f . . f f f f f f f f f . . . 
            . f f . f f f f f f f f f . . . 
            . . f f f f f f f f f f f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . . . . . 1 . . . . f f . . 
            . . . . . . . . . . . . . f . . 
            . . . . . . . . . . . . . f . . 
            `)
    } else {
    	
    }
    if (hops_and_paws.vx < 0) {
        hops_and_paws.image.flipX()
    }
})
