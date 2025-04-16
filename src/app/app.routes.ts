import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'ListarPensamento',
        pathMatch: 'full'
    },
    {
        path: 'criaPensamento',
        component: CriarPensamentoComponent
    },
    {
        path: 'listaPensamento',
        component: ListarPensamentoComponent
    }
];
