import {
    CommonModule
} from '@angular/common';
import {
    NgModule
} from '@angular/core';
import {
    MatSidenavModule
} from '@angular/material/sidenav';
import {
    MatIconModule
} from '@angular/material/icon';
import {
    MatToolbarModule
} from '@angular/material/toolbar';
import {
    MatListModule
} from '@angular/material/list';
import {
    // ... other modules ...
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule
} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule
    ],
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule
    ]
})
export class MaterialModule {}