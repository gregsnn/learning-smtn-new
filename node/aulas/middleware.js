// middleware pattern (chain of responsability)

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid3'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPasso = index => {
        middlewares && index < middlewares.length && middlewares[index](ctx, () => execPasso(index + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3) // passo3 não tem "next", logo não pode vir a frente de outros.
console.log(ctx)