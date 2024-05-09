
function aplicarDesconto(valor, desconto) {
    const valorDesconto = (desconto / 100) * valor;
    return valor - valorDesconto;
}

function aplicarJuros(valor, juros) {
    const valorJuros = (juros / 100) * valor;
    return valor + valorJuros;
}

function caculaPreco(precoProduto, parcela, formaDePagamento) {
    let total;

    if (['debito', 'pix', 'dinheiro', 'credito'].includes(formaDePagamento) && parcela > 0 && formaDePagamento !== null) {

        if (formaDePagamento === 'debito' && parcela === 1) {

            total = aplicarDesconto(precoProduto, 10);
            return total.toFixed(2);

        } else if (['pix', 'dinheiro'].includes(formaDePagamento) && parcela === 1) {
            
            total = aplicarDesconto(precoProduto, 15);
            return total.toFixed(2);

        } else if (formaDePagamento === 'credito' && parcela === 2) {
            
            total = precoProduto;
            return total.toFixed(2);

        } else if (formaDePagamento === 'credito' && parcela > 2) {
            
            total = aplicarJuros(precoProduto, 10);
            return total.toFixed(2);

        } else {
            return -1;
        }

    } else {
        return -1;
    }
}


(function () {
    const precoProduto = 75.90;
    const formaDePagamento = 'pix';
    const parcela = 1;

    const total = caculaPreco(precoProduto, parcela, formaDePagamento);
    
    if (total !== -1) {
        console.log('VALOR TOTAL = ' + total);
    } else {
        console.error('Não foi possível realizar o pagamento!');
        console.error('Código Condição de pagamento: \n1 - À vista Débito, recebe 10% de desconto; \n2 - À vista no Dinheiro ou PIX, recebe 15% de desconto; \n3 - Em duas vezes, preço normal de etiqueta sem juros; \n4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;')
    }
})();