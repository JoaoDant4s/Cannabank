
export const getAttBalanceUserForContext = (user, deposit) => {
    let userAux = {
        account: {
            accountNumber: user.account.accountNumber,
            balance: user.account.balance + parseInt(deposit),
            id: user.account.id
        },
        email: user.email,
        id: user.id,
        password: user.password,
        roles: user.roles,
        transactions: user.transactions,
        username: user.username
    }
    return userAux
}

export const userNameOrEmailUpdated = (prevEmail, email, prevUserName, username) => {
    if(prevEmail.localeCompare(email) !== 0 || prevUserName.localeCompare(username) !== 0){
        return true
    }
    return false
}

export const addTransactionToListAndAttContext = (user, transaction, deposit) => {
    user.transactions.push(transaction)
    let userAux = {
        account: {
            accountNumber: user.account.accountNumber,
            balance: user.account.balance,
            id: user.account.id
        },
        email: user.email,
        id: user.id,
        password: user.password,
        roles: user.roles,
        transactions: user.transactions,
        username: user.username
    }
    userAux = getAttBalanceUserForContext(userAux, deposit)

    return userAux
}