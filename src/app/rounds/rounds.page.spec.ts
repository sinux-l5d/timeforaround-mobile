import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";

import { RoundsPage } from "./tab2.page";

describe("RoundsPage", () => {
  let component: RoundsPage;
  let fixture: ComponentFixture<RoundsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoundsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RoundsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
