import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-collection-item-detail',
  styleUrl: './collection-item-detail.scss',
  templateUrl: './collection-item-detail.html',
})
export class CollectionItemDetail implements OnInit, OnDestroy{

  private readonly activedRoute = inject(ActivatedRoute);
  private readonly router  = inject(Router);
  itemId = signal<number | null>(null);

  routeSubscription : Subscription | null = null;

  ngOnInit(): void {
    this.routeSubscription = this.activedRoute.params.subscribe(
      (params) => {
              const selectedId = params["id"] ? parseInt(params["id"]) : null;
              this.itemId.set(selectedId);
      }
    );

  }

  next(){

    const currentId = this.itemId();

    if(currentId) {
      const nextId = currentId+1;
      this.router.navigate(["item", nextId]);
    }


  }

  ngOnDestroy(): void {
    if(this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

}
