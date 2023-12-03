import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Warehouse } from 'src/app/models/warehouse.model';
import { UtilityService } from 'src/app/services/utility.service';
import { WarehouseService } from 'src/app/services/warehouse.service';
import { AddWarehouseComponent } from '../add-warehouse/add-warehouse.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['ID', 'ApartmentNo', 'StreetName', 'City', 'State', 'Zipcode',
    'ActiveYN', 'CreatedDate', 'LastUpdatedDate', 'Actions'];
  dataSource: MatTableDataSource<Warehouse>;

  constructor(private warehouseService: WarehouseService, private router: Router, private utilService: UtilityService,
    private dialog: MatDialog, private route:ActivatedRoute) {
    this.dataSource = new MatTableDataSource([{}]);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.warehouseService.getAllWarehouses().subscribe({
      next: ((response: Warehouse[]) => {
        this.dataSource.data = response;
      }),
      error: (err: HttpErrorResponse) => {
        this.utilService.error(err.error.message, 'ok');
      }
    });
  }

  editWarehouse(warehouseId: number) {
    const dialogRef = this.dialog.open(AddWarehouseComponent, {
      width: 'auto',
      data: warehouseId,
    });

    dialogRef?.afterClosed().subscribe((result) => {
      this.warehouseService.getAllWarehouses().subscribe({
        next: ((response: Warehouse[]) => {
          this.dataSource.data = response;
        }),
        error: (err: HttpErrorResponse) => {
          this.utilService.error(err.error.message, 'ok');
        }
      });
    });
  }
}
