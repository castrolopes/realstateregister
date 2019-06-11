pragma solidity 0.5.9;

contract RealStateRegister {
    
    struct Imovel {
        address endereco;
        string enderecoRua;
        string cidade;
        string estado;
        string caracteristicas;
        uint metragem;
        string nomeProprietario;
        uint valorVenal;
    }
    
    Imovel[] public livro1;
    mapping(address => Imovel) public livro2;
    
    function registraImovel(
        address paramEndereco,
        string memory paramEnderecoRua,
        string memory paramCidade,
        string memory paramEstado,
        string memory paramCaracteristicas,
        string memory paramNomeProprietario,
        uint paramMetragem,
        uint paramValorVenal) public {
        Imovel memory novoImovel = Imovel(
            paramEndereco,
            paramEnderecoRua,
            paramCidade,
            paramEstado,
            paramCaracteristicas,
            paramMetragem,
            paramNomeProprietario,
            paramValorVenal);
            
        livro1.push(novoImovel);
        
        livro2[paramEndereco] = novoImovel;
    }
    
    function devolveNomeProprietario(uint matricula) public view returns (string memory) {
        return livro1[matricula].nomeProprietario;
    }
}
