
/*
    Elabore um algoritmo que calcule o que de ser pago por um produto, considerando o preço normal de etiqueta
    e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
    adequado.

    Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoProduto = 75.90;
const formaDePagamento = 'pix';
const parcela = 2;

let total;

if (['debito', 'pix', 'dinheiro', 'credito'].includes(formaDePagamento) && parcela > 0 && formaDePagamento !== null) {

    if (formaDePagamento === 'debito' && parcela === 1) {

        total = precoProduto - (precoProduto * 0.1);
        console.log("VALOR TOTAL = R$", total.toFixed(2));

    } else if (['pix', 'dinheiro'].includes(formaDePagamento) && parcela === 1) {
        
        total = precoProduto - (precoProduto * 0.15);
        console.log("VALOR TOTAL = R$", total.toFixed(2));

    } else if (formaDePagamento === 'credito' && parcela === 2) {
        
        total = precoProduto;
        console.log("VALOR TOTAL = R$", total.toFixed(2));

    } else if (formaDePagamento === 'credito' && parcela > 2) {
        
        total = precoProduto + (precoProduto * 0.1);
        console.log("VALOR TOTAL = R$", total.toFixed(2));

    } else {
        console.error('Não foi possível realizar o pagamento!');
        console.error('Código Condição de pagamento: \n1 - À vista Débito, recebe 10% de desconto; \n2 - À vista no Dinheiro ou PIX, recebe 15% de desconto; \n3 - Em duas vezes, preço normal de etiqueta sem juros; \n4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;')
    }

} else {
    console.error('Não foi possível realizar o pagamento!');
}