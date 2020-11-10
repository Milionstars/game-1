namespace SpriteKind {
    export const money = SpriteKind.create()
    export const gun = SpriteKind.create()
    export const heart = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.money, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.heart, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    pause(5000)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    effects.confetti.startScreenEffect()
    pause(2000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
let projectile: Sprite = null
let ninja = sprites.create(img`
    . . . f f f f f f f f . . . . . 
    . . f d d d d d d d d f . . . . 
    . . f d f d d d d f d f . . . . 
    . . f d d 2 2 2 2 d d f . . . . 
    . . . f f f f f f f f . . . . . 
    . . . . . . f f . . . . . . . . 
    . . . f f f f f f f f . . . . . 
    . . . . . . f f . . . . . . . . 
    . . . . . . f f . . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . f . . f . . . . . . . 
    . . . . . f . . f . . . . . . . 
    . . . . . f . . f . . . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tiles.createTilemap(hex`1000100001080808080808090808080808090802050404040404040904040404040904090509040904040404040409040409040705090409040404040404090404040407050904090404040904040904040404070504040404040409040404040404040705040404090404040404040404090407050404040404040404040904040904070509040404040409040404040409040905090409040404040404040404090407050404090404040404040904040404070504040404040404040409040404040705090404040404090404090404090407050904090404040904040404040904070504040904040404040404040404040703060606060606060606090606060609`, img`
    . . . . . . . . . . . . . 2 . . 
    . . . . . . . . . . . . . 2 . 2 
    . . . . . . . . . . 2 . . 2 . . 
    . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . . 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 2 . . 
    . . . . . . . . . . 2 . . 2 . . 
    . . . . . . . . . . . . . 2 . 2 
    . . . 2 . . . . . . . . . 2 . . 
    . . . 2 . . . . . . 2 . . . . . 
    . . . . . . . . . . 2 . . . . . 
    . 2 . . . . . 2 . . 2 . . 2 . . 
    . 2 . 2 . . . 2 . . . . . 2 . . 
    . . . 2 . . . . . . . . . . . . 
    . . . . . . . . . . 2 . . . . 2 
    `, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorth,sprites.dungeon.collectibleInsignia], TileScale.Sixteen))
ninja.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(ninja, 40, 60)
let bitcoin = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . 5 5 5 4 5 5 5 5 5 5 5 . . . 
    . 5 5 5 4 4 4 4 5 5 5 5 5 5 . . 
    . 5 5 5 5 4 5 4 5 5 5 5 5 5 . . 
    . 5 5 5 5 4 4 4 4 5 5 5 5 5 . . 
    . 5 5 5 5 4 5 5 4 5 5 5 5 5 . . 
    . 5 5 5 5 4 5 5 4 5 5 5 5 5 . . 
    . 5 5 5 5 4 5 5 4 5 5 5 5 5 . . 
    . 5 5 5 4 4 4 4 4 5 5 5 5 5 . . 
    . . 5 5 5 4 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.money)
let gun = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f . . 
    . f f f f f f f f f f f f f . . 
    . f f f . . f . . . . . . . . . 
    . f f f f f f . . . . . . . . . 
    . f f f . . . . . . . . . . . . 
    . f f f . . . . . . . . . . . . 
    . f f f . . . . . . . . . . . . 
    . f f f . . . . . . . . . . . . 
    . f f f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.gun)
let heart = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 2 2 2 2 . 2 2 2 2 . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    `, SpriteKind.heart)
let dello = sprites.create(img`
    . . . . . . f . . . . . . . . . 
    . . . . . f f f . . . . . . . . 
    . . . . f f . f f . . . . . . . 
    . . . f f . . . f f . . . . . . 
    . . f f . . . . . f f . . . . . 
    . f f . . . . . . . f f . . . . 
    f f . . . . . . . . . f f . . . 
    f . . . . . . . . . . . f . . . 
    f . . . . . . . . . . . f . . . 
    f . . . . . . . . . . . f . . . 
    f . . . . . . . . . . . f . . . 
    f f . . . . . . . . . . f . . . 
    f f . . . . . . . . . . f . . . 
    f . . . f f f f f f f . f . . . 
    f . . . . . . . . . . . f . . . 
    f f f f f f f f f f f f f f . . 
    `, SpriteKind.gun)
info.setLife(1)
game.onUpdateInterval(750, function () {
    heart.setPosition(randint(16, 30), randint(24, 120))
})
game.onUpdateInterval(1000, function () {
    gun.setPosition(8, randint(8, 120))
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f 5 . . . . . 
        . . f f f f f f f f 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, gun, 50, 0)
    projectile.setVelocity(80, 0)
    gun.setVelocity(0, 100)
})
game.onUpdateInterval(1000, function () {
    bitcoin.setPosition(randint(16, 104), randint(24, 120))
})
game.onUpdateInterval(500, function () {
    dello.setPosition(randint(-5, -115), 104)
})
