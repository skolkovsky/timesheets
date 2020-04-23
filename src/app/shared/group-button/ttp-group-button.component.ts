import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ButtonModel } from "../../models/button.model";
import { StateInterface } from "../../interfaces/state.interface";
import { StateService } from "../../services/state.service";
import { TtpBaseComponent } from "../../ng-core/ttp-base.component";
import { States } from "src/app/constants/states";

@Component({
  selector: "ttp-group-button",
  templateUrl: "./ttp-group-button.component.html",
})
export class TtpGroupButtonComponent extends TtpBaseComponent {
  @Input()
  public items: ButtonModel[];

  @Input()
  public color: string = "danger";

  @Input()
  public backgroundColor: string = "#100e3d";

  @Input()
  public title: string;

  @Output()
  public buttonClickChange: EventEmitter<ButtonModel> = new EventEmitter<
    ButtonModel
  >();

  public buttonClass: string = "btn-" + this.color;
  public buttonOutlineClass: string = "btn-outline-" + this.color;

  constructor(protected stateService: StateService) {
    super(stateService);
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }

  private addEditButton(): void {
    this.items.push({
      id: "add",
      isHasIcon: true,
      iconName: "plus-small",
    } as ButtonModel);
  }

  private removeEditButton(): void {
    const isHasButtonAddType: boolean = this.items.some(
      (button: ButtonModel) => button.id === "add"
    );
    if (isHasButtonAddType) {
      const addElemet: ButtonModel = this.items.filter(
        (element: ButtonModel) => element.id === "add"
      )[0];
      this.items.splice(this.items.indexOf(addElemet), 1);
    }
  }

  public processState(state: StateInterface): void {
    const stateName: string = state.payload.stateName;
    switch (stateName) {
      case States.showAddButton:
        this.addEditButton();
        break;
      case States.hideAddButton:
        this.removeEditButton();
        break;
      default:
        break;
    }
  }

  public chooseElement(item: ButtonModel): void {
    this.items.find((button: ButtonModel) => (button.clicked = false));
    const clickedButton = this.items.find(
      (button: ButtonModel) =>
        (button.clicked =
          button.label.toLowerCase() === item.label.toLowerCase())
    );
    this.stateService.setStateComponent({
      componentName: TtpGroupButtonComponent.name,
      payload: {
        stateName: States.clickButton,
        value: clickedButton,
      },
    });
    this.buttonClickChange.emit(clickedButton);
  }
}
