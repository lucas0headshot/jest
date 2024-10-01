//TODO: corrigir import

const isValidJSON = str => {
    try {
        return Boolean(JSON.parse(str)) && typeof str === "string"
    } catch(err) {
        return false;
    }
};



describe("Testes de validação de JSON", () => {
    test("Cenário 1: JSON Válido", () => {
        const input = '{"nome": "João", "idade": 30, "ativo": true}';
        expect(isValidJSON(input)).toBe(true);
    });

    test("Cenário 2: JSON Inválido (falta uma vírgula)", () => {
        const input = '{"nome": "Maria" "idade": 25}';
        expect(isValidJSON(input)).toBe(false);
    });

    test("Cenário 3: JSON Inválido (chaves não estão entre aspas)", () => {
        const input = '{nome: "Pedro", idade: 40}';
        expect(isValidJSON(input)).toBe(false);
    });

    test("Cenário 4: JSON Válido (array)", () => {
        const input = '["maçã", "banana", "laranja"]';
        expect(isValidJSON(input)).toBe(true);
    });
});