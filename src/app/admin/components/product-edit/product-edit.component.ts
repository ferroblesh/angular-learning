import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params: Params) => {
      const { id } = params;
      this.productsService.getProduct(id).subscribe(product => {
        this.form.patchValue(product);
      })
    })
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['',[Validators.required]],
      price: ['',[Validators.required, MyValidators.isPriceValid]],
      image: '',
      description: ['',[Validators.required]],
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if(this.form.valid) {
      const product = this.form.value;
      this.productsService.updateProduct(this.id, product)
      .subscribe(newProduct => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
    }
  }

  get priceField() {
    return this.form.get('price');
  }
}
